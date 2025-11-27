import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})


export class Queenconfig {
    public config = new Config();

 }


class Admin
{
    static readonly adminPageIconName = 'user';
};

class Laywer
{
    static readonly codeOfConductContent = 'Every participant has to....';
    static readonly extraPageTitle = '';
};

class Config
{
    static readonly showExtraHeader = true;
    static readonly rowsPerPage = 6;
    static readonly userMenuVisible = false;
    static readonly showBlackFridayBanner = true;
    static readonly admin = new Admin();
    static readonly laywer = new Laywer();
};


