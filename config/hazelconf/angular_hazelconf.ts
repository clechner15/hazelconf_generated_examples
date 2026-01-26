import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Hazelconf {
    public config = new Config();

 }


class Menu
{
    static readonly iconSettings = 'mechanics';
};

class Config
{
    static readonly rowsPerPage = 4;
    static readonly showBlackFridayBanner = false;
    static readonly showExtraHeader = false;
    static readonly menu = new Menu();
};


