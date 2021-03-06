// ! Imports
// * Services
import mongoose from '../../services/mongoose.service';

// ! Interfaces Definitions
enum UserRoles {
	admin = 'ADMIN',
	user = 'USER',
}
interface secureUserPropertiesInterface {
	_id: mongoose.Types.ObjectId;
	name: string;
	lastName: string;
	timeStamp: Date;
	email: emailPropertiesInterface;
	cartId: mongoose.Types.ObjectId | null;
	role: UserRoles;
	address: addressPropertiesInterface;
	phoneNumber: phonePropertiesInterface;
	linkedAccounts: linkedAccountsPropertiesInterface;
}
interface unsecureUserPropertiesInterface extends secureUserPropertiesInterface {
	password: string;
}
interface emailPropertiesInterface {
	email: string;
	verified: boolean;
	verification_code: mongoose.Types.ObjectId | null;
}
interface linkedAccountsPropertiesInterface {
	facebook: string | null;
	github: string | null;
}
interface phonePropertiesInterface {
	extension: number;
	number: number;
}
interface addressPropertiesInterface {
	postalCode: number;
	street: string;
	streetNumber: number;
	city: string;
	country: string;
	state: string;
}

// ! Exports
export {
	addressPropertiesInterface,
	phonePropertiesInterface,
	linkedAccountsPropertiesInterface,
	emailPropertiesInterface,
	secureUserPropertiesInterface,
	unsecureUserPropertiesInterface,
	UserRoles,
};
