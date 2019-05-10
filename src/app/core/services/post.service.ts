import { Injectable } from '@angular/core';
import { Post } from '../../shared/models/post';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { PostFinal } from '../../shared/models/postfinal.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  private postURLAll = 'https://tiger010203.herokuapp.com/a/admin/listAllPosts/1';
  private postURLApproved = 'https://tiger010203.herokuapp.com/a/admin/listPostApproved/1';
  private postURLPending = 'https://tiger010203.herokuapp.com/a/admin/listPostPending/1';
  private postURLdetail = 'https://tiger010203.herokuapp.com/a/admin/post';
  private handlePostToApproved = 'https://tiger010203.herokuapp.com/a/admin/handlePostToApproved';
  private finalProductByAdmin = 'https://tiger010203.herokuapp.com/a/admin/listProductCustomerIsNull';
  private postsMoneyURL = 'https://tiger010203.herokuapp.com/a/admin/getAllPostWithAdmin';

  getPostsAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postURLAll).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }
  getPostsApproved(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postURLApproved).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }
  getPostsPending(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postURLPending).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }

  getPostsMoney(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsMoneyURL).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }

  getAllFinalProductByAdmin(): Observable<Post[]> {
    return this.http.get<Post[]>(this.finalProductByAdmin).pipe(
      tap(receivedPosts => console.log(`receivedPosts = ${JSON.stringify(receivedPosts)}`)),
      catchError(error => of([]))
    );
  }

  getPostFromId(id: number): Observable<Post> {
    const url = `${this.postURLdetail}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(receivedPost => console.log(`selected post = ${JSON.stringify(receivedPost)}`)),
      catchError(error => of(new Post()))
    );
  }
  getPostFromIdApproved(id: number): Observable<Post> {
    const url = `${this.handlePostToApproved}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(receivedPost => console.log(`selected post = ${JSON.stringify(receivedPost)}`)),
      catchError(error => of(new Post()))
    );
  }
  
}
