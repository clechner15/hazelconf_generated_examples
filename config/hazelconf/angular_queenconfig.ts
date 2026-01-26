import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Queenconfig {
    public config = new Config();

 }


class Menu
{
};

class Config
{
    static readonly rowsPerPage = 7;
    static readonly showBlackFridayBanner = true;
    static readonly showExtraHeader = false;
    static readonly menu = new Menu();
};


