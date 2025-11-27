public class Queenconf {

    public final Config config = new Config();


    public class Config {
        public class Admin {
          public final String adminPageIconName = "user"; // name of icon for admin page
        }

        public final Admin admin = new Admin();

        public class Laywer {
          public final String codeOfConductContent = "Every participant has to...."; // content of code of conduct
          public final String extraPageTitle = "\"\""; // show the tiltle of the extra page
        }

        public final Laywer laywer = new Laywer();

          public final boolean showExtraHeader = true; // show extra header
          public final int rowsPerPage = 6; // how many rows per page are shown
          public final boolean userMenuVisible = false; // the user menu should be shown or hidden
          public final boolean showBlackFridayBanner = true; // show black friday banner
    }

}

