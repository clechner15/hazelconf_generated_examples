import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Hazelconf {
    public config = new Config();

 }


class Menu
{
};

class Config
{
    static readonly rowsPerPage = 10;
    static readonly showBlackFridayBanner = true;
    static readonly showExtraHeader = false;
    static readonly menu = new Menu();
};


