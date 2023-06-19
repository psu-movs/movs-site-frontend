import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import {
  Article,
  ClientUser,
  DepartmentHeadInfo,
  DepartmentInfo,
  ScienceWork
} from "@/http/responseModels";
import {
  AddDepartmentHead,
  UpdateDepartmentInfo,
  UpdateDepartmentHead,
  AddArticle,
  UpdateArticle,
  AddScienceWork,
  UpdateScienceWork
} from "@/http/requestModels";
import moment from "moment";
import 'moment/locale/ru';

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
  private token?: string | null;

  constructor() {
    this.client = axios.create({
      baseURL: "https://api.movs.space/v1",
    });
  }

  setToken(token: string | null) {
    this.token = token;
  }

  async request(method: string, endpoint: string, payload?: RequestPayload): Promise<any | ErrorResponse> {
    console.log(`[HTTP] ${method} ${endpoint} ${JSON.stringify(payload)}`);
    if (this.token === undefined) this.token = window.localStorage.getItem('token');

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
    window.localStorage.setItem('token', this.token);

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
    const articles: Article[] = await this.request("GET", "/news");
    moment.locale('ru');

    articles.map(article => {
      article.creation_date = moment(article.creation_date).format("DD MMMM YYYY");
    })

    return articles;
  }

  async getArticle(articleID: string): Promise<Article> {
    const article: Article = await this.request("GET", `/news/${articleID}`);

    moment.locale('ru');
    article.creation_date = moment(article.creation_date).format("DD MMMM YYYY");

    return article;
  }

  async addArticle(
    payload: AddArticle
  ): Promise<Article> {
    const data = new FormData();
    data.append("title", payload.title);
    data.append("description", payload.description);
    data.append("description_preview", payload.descriptionPreview);
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
    if (payload.descriptionPreview) data.append("description_preview", payload.descriptionPreview);
    if (payload.image) data.append("thumbnail", payload.image);

    return await this.request("PATCH", `/news/${articleID}`, {data})
  }

  async deleteArticle(articleID: string) {
    await this.request("DELETE", `/news/${articleID}`)
  }

  async getScienceWorks(): Promise<ScienceWork[]> {
    return await this.request("GET", "/science_works")
  }

  async addScienceWork(
    payload: AddScienceWork
  ): Promise<ScienceWork> {
    const data = new FormData();
    data.append("title", payload.title);
    data.append("description", payload.description);
    data.append("image", payload.image);

    return await this.request("POST", "/science_works", { data });
  }

  async updateScienceWork(
    scienceWorkID: string,
    payload: UpdateScienceWork
  ): Promise<ScienceWork> {
    const data = new FormData();

    if (payload.title) data.append("title", payload.title);
    if (payload.description) data.append("description", payload.description);
    if (payload.image) data.append("image", payload.image);

    return await this.request("PATCH", `/science_works/${scienceWorkID}`, { data })
  }

  async deleteScienceWork(scienceWorkID: string) {
    await this.request("DELETE", `/science_works/${scienceWorkID}`)
  }
}
