import { APIRequestContext } from '@playwright/test';

export interface Headers {
  [key: string]: string;
}

export async function loginWithAPI(request: APIRequestContext, userData: LoginUserModel): Promise<APIResponse> {
  const response = await request.post('/api/login', {
    data: {
      email: userData.userEmail,
      password: userData.userPassword,
    },
  });

  return response;
}

export async function getAuthorizationHeader(request: APIRequestContext, userData: LoginUserModel): Promise<Headers> {
  const loginUrl = '/api/login';
  const data = {
    email: userData.userEmail,
    password: userData.userPassword,
  };
  const responseLogin = await request.post(loginUrl, {
    data,
  });
  const responseLoginJson = await responseLogin.json();

  return {
    Authorization: `Bearer ${responseLoginJson.access_token}`,
  };
}

export async function createFlashPostWithAPI(
  request: APIRequestContext,
  flashPost: FlashPost,
  headers: Headers,
): Promise<APIResponse> {
  const response = await request.post('/api/flashposts', {
    data: {
      body: flashPost.content,
      is_public: false,
      settings: {
        color: '#dddddd',
      },
    },
    headers,
  });

  return response;
}
