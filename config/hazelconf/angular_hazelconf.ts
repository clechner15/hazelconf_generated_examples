import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Hazelconf {
    public config = new Config();

 }


class Menu
{
    static readonly 'settingsIcon' = 'mechanics';
};

class Config
{
    static readonly rowsPerPage = 5;
    static readonly showBlackFridayBanner = false;
    static readonly showExtraHeader = false;
    static readonly menu = new Menu();
};


