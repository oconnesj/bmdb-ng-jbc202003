export class Actor {
	 id: number;
	 firstName: string;
	 lastName: string;
	 gender: string;
     birthdate: Date;
     
     constructor (id:number = 0, firstName: string = "", lastName: string = "", gender: string = "", birthdate: Date = null){
		 this.id = id;
		 this.firstName = firstName;
		 this.lastName = lastName;
		 this.birthdate = birthdate;
		 this.gender = gender;
     }


}
