import axios, { AxiosInstance, AxiosError } from 'axios';
import { Product, CreateProductDto, UpdateProductDto } from '../types/product';

class ApiService {
  private client: AxiosInstance;

  constructor(baseURL: string = 'http://localhost:3000') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async createProduct(productData: CreateProductDto): Promise<Product> {
    try {
      const response = await this.client.post<Product>('/products', productData);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async getProducts(): Promise<Product[]> {
    try {
      const response = await this.client.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async getProductById(id: string): Promise<Product> {
    try {
      const response = await this.client.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async updateProduct(id: string, productData: UpdateProductDto): Promise<Product> {
    try {
      const response = await this.client.put<Product>(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      await this.client.delete(`/products/${id}`);
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      console.error('Error en la respuesta:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error en la solicitud:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  }
}

export const apiService = new ApiService();