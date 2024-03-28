import { ApiError, NetworkError } from "../api/errors";

class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string = "http://192.168.1.19:5000/api") {
    this.baseUrl = baseUrl;
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      throw new ApiError(
        `Api error! Status: ${response.status}`,
        response.status
      );
    }

    return response.json();
  }

  private async handleNetworkError(response: Response) {
    if (!response.ok) {
      throw new NetworkError(
        `Network error on request. Status: ${response.status}`
      );
    }
  }

  private async request<T>(
    url: string,
    method: string,
    data?: object
  ): Promise<T> {
    const requestOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    if (data) {
      requestOptions.body = JSON.stringify(data);
    }

    const fullUrl = `${this.baseUrl}${url}`;
    console.log("url", url);
    console.log("baseurl", this.baseUrl);

    console.log("full", fullUrl);
    const response = await fetch(fullUrl, requestOptions);

    await this.handleNetworkError(response);

    return this.handleResponse(response) as Promise<T>;
  }

  get<T>(url: string): Promise<T> {
    return this.request<T>(url, "GET");
  }

  post<T>(url: string, data: object): Promise<T> {
    return this.request<T>(url, "POST", data);
  }

  put<T>(url: string, data: object): Promise<T> {
    return this.request<T>(url, "PUT", data);
  }

  patch<T>(url: string, data: object): Promise<T> {
    return this.request<T>(url, "PATCH", data);
  }

  delete<T>(url: string): Promise<T> {
    return this.request<T>(url, "DELETE");
  }
}

export const apiClient = new HttpClient();
