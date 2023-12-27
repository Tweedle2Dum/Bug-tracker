export interface User {
  createdAt: number;
  email: string;
  id: string;
  name: string;
  updatedAt: number;
  workspaces: Workspace[];
}

export interface Workspace {
  boards: Columns[];
  createdAt: number;
  id: string;
  name: string;
  updatedAt: number;
  description: string;
}

export interface Columns {}

