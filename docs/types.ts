// types.ts

/**
 * Types for the mobile-app-react-native project.
 */

// User interface
export interface User {
  id: number;
  name: string;
  email: string;
  picture: string;
  // Add address to the user interface
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

// Auth interface
export interface Auth {
  user: User | null;
  token: string | null;
  // Add a field to indicate if the user is authenticated
  isAuthenticated: boolean;
}

// Response interface
export interface Response {
  data: any;
  error: string | null;
  success: boolean;
  // Add a field to indicate the status code of the response
  statusCode: number;
}

// Login interface
export interface Login {
  email: string;
  password: string;
}

// Register interface
export interface Register {
  username: string;
  email: string;
  password: string;
  // Add a field to confirm the password
  confirmPassword: string;
}

// UpdateProfile interface
export interface UpdateProfile {
  name: string;
  email: string;
  password: string;
  // Add a field to confirm the new password
  newPasswordConfirm: string;
}