import {
  CreateAxiosDefaults,
  AxiosRequestConfig,
  AxiosProxyConfig,
} from 'axios';

export interface ArticleOptions {
  image: string;
  video: {
    path: string;
    comment?: string | number;
    canDownload?: boolean;
  };
  poll: PollOptions;
  headtext: number;
}

export interface VideoOptions {
  thum_url: string;
  comment: string | number;
  canDownload: boolean;
  file_no: number;
}

export interface PollOptions {
  title: any;
  items: FixedLengthArray<any, 20>;
  endTime?: string;
  notUseEndTime?: boolean;
  onlyGonik?: boolean;
  usePreview?: boolean;
  useMultiSelect?: boolean;
  multiSelectLength?: number;
}

export interface DcinsideApiOptions {
  username: string | number;
  password: string | number;
  captcha?: boolean;
  proxy?: AxiosProxyConfig;
}

export type ArrayLengthMutationKeys =
  | 'splice'
  | 'push'
  | 'pop'
  | 'shift'
  | 'unshift'
  | number;

export type ArrayItems<T extends Array<any>> = T extends Array<infer TItems>
  ? TItems
  : never;

export type FixedLengthArray<T extends any[]> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> };

export type GallogType = 'write' | 'delete' | 'check';

export type CaptchaType = 'write' | 'recommend' | 'comment';

export type DcconSearchType = 'title' | 'nick_name' | 'tags';

export class DcinsideApi {
  constructor(options: DcinsideApiOptions);

  public requestAxios(options: AxiosRequestConfig);

  public setAxios(options: CreateAxiosDefaults);

  public requestArticle(
    id: string | number,
    subject: string,
    memo: string,
    options?: Readonly<ArticleOptions>
  );

  public requestArticleEdit(
    id: string | number,
    no: number,
    subject: string,
    memo: string,
    options?: Pick<ArticleOptions, 'headtext'>
  );

  public requestArticleList(
    id: string | number,
    page?: number,
    recommend?: boolean,
    listNum?: number,
    headid?: number
  );

  public requestArticleInfo(id: string | number, no: number);

  public requestArticleFiles(id: string | number, no: number);

  public requestArticleReportPorn(id: string | number, no: number);

  public removeArticle(id: string | number, no: number);

  public requestComment(
    id: string | number,
    no: number,
    memo: string | number,
    c_no: number
  );

  public removeComment(id: string | number, no: number, re_no: number);

  public requestCommentList(id: string | number, no: number, page?: number);

  public requestDccon(
    id: string | number,
    no: number,
    package_idx: number,
    detail_idx: number
  );

  public requestDcconInfo(package_idx: number);

  public requestDcconList(page?: number);

  public requestDcconSearch(
    query: string | number,
    page?: number,
    type?: DcconSearchType
  );

  public requestVote(id: string | number, no: number, isUp: boolean);

  public requestGuestbookWrite(
    userid: string | number,
    memo: string | number,
    isSecret?: boolean
  );

  public removeGuestbookWrite(userid: string | number, headnum: number);

  public requestGuestbookList(userid: string | number, page?: number);

  public requestUploadImage(id: string | number, path: string);

  public requestUploadVideo(id: string | number, path: string);

  public requestRegistVideo(id: string | number, options: VideoOptions);

  public requestRegistPoll(id: string | number, options: PollOptions);

  public requestEndPoll(id: string | number, no: number);

  public requestPollVote(id: string | number, idx: number);

  public requestRelationGall(id: string | number);

  public requestGallInfo(id: string | number);

  public requestHit(id: string | number, no: number);

  public requestBest(id: string | number, no: number);

  public requestCaptchaSession(
    id: string | number,
    type: string,
    captcha_type: CaptchaType,
    ci_t: string,
    cookie: string
  );

  public requestOcr(path: string);

  public requestSearch(query: string | number, page?: number, listNum?: number);

  public requestGlobalSearch(query: string | number);

  public requestRankingMajor(hot?: boolean);

  public requestRankingMinor(hot?: boolean);

  public requestRankingMini(hot?: boolean);

  public requestMajorNew();

  public requestMinorNew();

  public requestMiniNew();

  public checkVaildGall(id: string | number, page?: number);

  public checkVaildUser(userid: string | number);

  public ignoreIndex(url: string);

  public parseWrite(url: string);

  public parseList(url: string, mobile?: boolean);

  public parseView(url: string, up?: boolean);

  public parseDelete(url: string);

  public getGallogApi(userid: string | number, type: GallogType);

  public removeItemsNext(arr: Array, index: number);

  public generateRandomString();

  public generateDefaultHeaders(url: string);
}