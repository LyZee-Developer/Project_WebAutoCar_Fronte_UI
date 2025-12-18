import type { Country } from "./country/country";
import type { IOwnerInfo } from "./info/info";
import type { IServiceDetail } from "./service/service";

export interface HeaderData{
    code:string,
    title:string,
    titleEnglish:string
}

export interface SystemState {
  isDark: boolean;
  isShowNavLeftMenu: boolean;
  headerType: string;
  ownInfo: IOwnerInfo;
  services: IServiceDetail[];
  country:Country,
  language:Record<string, string>
}

