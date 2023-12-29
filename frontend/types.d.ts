export interface User {
  createdAt: number;
  email: string;
  id: string;
  name: string;
  updatedAt: number;
  workspaces: Workspace[];
}

export interface Workspace {
  boards: Board[];
  createdAt: number;
  id: string;
  name: string;
  updatedAt: number;
  description: string;
}

export interface Board {
  id: string;
  created_at: number;
  updated_at: number;
  name: string;
  description: string;
  workspace_id: string;
  columns: Columns[];

}



export interface Columns {}

