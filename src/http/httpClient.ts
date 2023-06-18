import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import {
  Article,
  ClientUser,
  DepartmentHeadInfo,
  DepartmentInfo
} from "@/http/responseModels";
import {
  AddDepartmentHead,
  UpdateDepartmentInfo,
  UpdateDepartmentHead,
  AddArticle,
  UpdateArticle
} from "@/http/requestModels";

type StringAny = {
  [key: string]: any;
};

interface RequestPayload {
  data?: FormData | StringAny;
  params?: StringAny;
}

interface ErrorPayload {
  code: number;
  detail: string;
}

interface ErrorResponse {
  error: ErrorPayload
}

export default class HTTPClient {
  private client: AxiosInstance;
  private token: string | null;

  constructor() {
    this.client = axios.create({
      baseURL: "https://api.movs.space/v1",
    });
    this.token = null;
  }

  async request(method: string, endpoint: string, payload?: RequestPayload): Promise<any | ErrorResponse> {
    console.log(`[HTTP] ${method} ${endpoint} ${JSON.stringify(payload)}`)

    let response: AxiosResponse<any, any> | undefined;

    try {
      response = await this.client.request({
        method: method,
        url: endpoint,
        data: payload?.data,
        params: payload?.params,
        headers: {
          Authorization: this.token !== null && `Bearer ${this.token}`,
        },
      });
    }
    catch (error) {
      if (error instanceof AxiosError) {
        response = error.response;
      }

      else {
        throw error;
      }
    }

    console.log(`[HTTP] Received a response with status code: ${response?.status}`)

    if (!response) return  null;

    if (response.status === 401) {
      return null;
    }

    if (response.status === 200) return response.data;

    return {
      error: {
        code: response.status,
        message: response.data.detail
      }
    }
  }

  async register(username: string, email: string, password: string) {
    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);

    return await this.request("POST", "/users", { data });
  }

  async login(email: string, password: string) {
    const data = new FormData();
    data.append("username", email);
    data.append("password", password);

    const response = await this.request("POST", "/users/login", { data });

    if (response.error) return response;

    this.token = response.access_token;

    return null;
  }

  async getMe(): Promise<ClientUser & ErrorResponse> {
    return await this.request("GET", "/users/me");
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

  async getDepartmentHead(): Promise<DepartmentHeadInfo> {
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

  async getArticles(): Promise<Article[]> {
    return await this.request("GET", "/news")
  }

  async getArticle(articleID: string): Promise<Article> {
    return await this.request("GET", `/news/${articleID}`);
  }

  async addArticle(
    payload: AddArticle
  ): Promise<Article> {
    const data = new FormData();
    data.append("title", payload.title);
    data.append("description", payload.description);
    data.append("thumbnail", payload.image);

    return await this.request("POST", "/news", { data });
  }

  async updateArticle(
    articleID: string,
    payload: UpdateArticle
  ): Promise<Article> {
    const data = new FormData();

    if (payload.title) data.append("title", payload.title);
    if (payload.description) data.append("description", payload.description);
    if (payload.image) data.append("thumbnail", payload.image);

    return await this.request("PATCH", `/news/${articleID}`, {data})
  }

  async deleteArticle(articleID: string) {
    await this.request("DELETE", `/news/${articleID}`)
  }
}
