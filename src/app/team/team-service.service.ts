import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface Member {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Data {
  page: number;
  per_page: number;
  total: number;
  data: Member[];
}

const url = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root',
})
export class TeamServiceService {
  constructor(private http: HttpClient) {}

  async getMembers() {
    let data = await firstValueFrom(this.http.get<Data>(url + '?page=2'));
    return data.data;
  }

  async getMember(id: number) {
    let { data } = await firstValueFrom(
      this.http.get<{ data: Member }>(url + '/' + id)
    );
    return data;
  }
}
