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
}

// Auth interface
export interface Auth {
  user: User | null;
  token: string | null;
}

// Response interface
export interface Response {
  data: any;
  error: string | null;
  success: boolean;
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
}

// UpdateProfile interface
export interface UpdateProfile {
  name: string;
  email: string;
  password: string;
}