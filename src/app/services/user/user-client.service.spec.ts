import { TestBed, inject } from '@angular/core/testing';

import { UserClientService } from './user-client.service';

describe('UserClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserClientService]
    });
  });

  it('should be created', inject([UserClientService], (service: UserClientService) => {
    expect(service).toBeTruthy();
  }));
});

// describe('UserClientService', () => {
//
//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [HttpClientTestingModule],
//     providers: [UserService]
//   }));
//
//   it('should list the users', () => {
//     const userService = TestBed.get(UserService);
//     const http = TestBed.get(HttpTestingController);
//     // fake response
//     const expectedUsers = [{ name: 'Cédric' }];
//
//     let actualUsers = [];
//     userService.list().subscribe((users: Array<UserModel>) => {
//       actualUsers = users;
//     });
//
//     http.expectOne('/api/users').flush(expectedUsers);
//
//     expect(actualUsers).toEqual(expectedUsers);
//   });
// });
