export class Video{
    private _genre = ["Comedy", "SCI_FI", "Horor", "Romance", "Action", "Thriller", "Drama", "Mystery", "Crime", "Animation", "Adventure", "Fantasy"];
    private _rating = ["1 star","2 stars","3 stars","4 stars","5 stars"];
    private _status = ["avaliable", "unavaliable"];

    constructor (){
    }

    public get genre() {
      return this._genre;
    }
    public set genre(value) {
        this._genre = value;
    }
    public get rating() {
      return this._rating;
    }
    public set rating(value) {
        this._rating = value;
    }
    public get status() {
      return this._status;
    }
    public set status(value) {
      this._status = value;
    }

}

