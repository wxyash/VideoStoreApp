export class User{

    private _firstName: String;
    private _lastName: String;
    private _address: String;
    private _city: String;
    private _phoneNumber: Number;
    private _status: boolean;




    constructor(fNmae, lName,address,city,phone,status){
        this.firstName = fNmae;
        this.lastName =lName;
        this.address =address;
        this.city =city
        this.phoneNumber =phone;
        this.status =status;
    }

    public get status(): boolean {
        return this._status;
    }
    public set status(value: boolean) {
        this._status = value;
    }

    public get phoneNumber(): Number {
        return this._phoneNumber;
    }
    public set phoneNumber(value: Number) {
        this._phoneNumber = value;
    }

    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }

     public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }

    public get address(): String {
        return this._address;
    }
    public set address(value: String) {
        this._address = value;
    }

    public get city(): String {
        return this._city;
    }
    public set city(value: String) {
        this._city = value;
    }


}
