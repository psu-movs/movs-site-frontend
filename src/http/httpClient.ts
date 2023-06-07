import axios, { AxiosInstance } from "axios";
import {
  ClientUser,
  DepartmentHeadInfo,
  DepartmentInfo,
} from "@/http/responseModels";
import { AddDepartmentHead, UpdateDepartmentInfo, UpdateDepartmentHead } from "@/http/requestModels";

type StringAny = {
  [key: string]: any;
};

interface RequestPayload {
  data?: FormData | StringAny;
  params?: StringAny;
}

export default class HTTPClient {
  private client: AxiosInstance;
  private token: string | null;

  constructor() {
    this.client = axios.create({
      baseURL: "https://web-production-4e33.up.railway.app/api/v1",
    });
    this.token = localStorage.getItem("token");
  }

  async request(method: string, endpoint: string, payload?: RequestPayload) {
    const response = await this.client.request({
      method: method,
      url: endpoint,
      data: payload?.data,
      params: payload?.params,
      headers: {
        Authorization: this.token !== null && `Bearer ${this.token}`,
      },
    });

    return response.data;
  }

  async register(username: string, email: string, password: string) {
    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);

    await this.request("POST", "/users", { data });
  }

  async login(username: string, password: string) {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    const response = await this.request("POST", "/users/login", { data });

    this.token = response.access_token;
    localStorage.setItem("token", response.access_token);
  }

  async getMe(): Promise<ClientUser> {
    return await this.request("GET", "/users");
  }

  async getDepartmentInfo(): Promise<DepartmentInfo> {
    return await this.request("GET", "/department");
  }

  async addDepartmentInfo(data: DepartmentInfo): Promise<DepartmentInfo> {
    return await this.request("POST", "/department", { data });
  }

  async updateDepartmentInfo(
    data: UpdateDepartmentInfo
  ): Promise<DepartmentInfo> {
    return await this.request("PATCH", "/department", { data });
  }

  async getDepartmentHead(): Promise<DepartmentInfo> {
    return await this.request("GET", "/department/head");
  }

  async addDepartmentHead(
    payload: AddDepartmentHead
  ): Promise<DepartmentHeadInfo> {
    const data = new FormData();
    data.append("phone", payload.phone);
    data.append("email", payload.email);
    data.append("address", payload.address);
    data.append("full_name", payload.full_name);
    data.append("photo", payload.photo);

    return await this.request("POST", "/department/head", { data });
  }

  async updateDepartmentHead(
    payload: UpdateDepartmentHead
  ): Promise<DepartmentHeadInfo> {
    const data = new FormData();

    if (payload.phone) data.append("phone", payload.phone);
    if (payload.email) data.append("email", payload.email);
    if (payload.address) data.append("address", payload.address);
    if (payload.full_name) data.append("full_name", payload.full_name);
    if (payload.photo) data.append("photo", payload.photo);

    return await this.request("PATCH", "/department/head", { data });
  }
}
