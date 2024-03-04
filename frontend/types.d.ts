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

export interface Columns {
  columns: Column[];
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

interface Comment {
  id: string;
  created_at: number;
  updated_at: number;
  task_id: string;
  column_id: string; // Assuming you have a column ID in your comment data
  text: string;
  user: User;
  task: Task;
}

interface CommentResponse {
  comments: Comment[];
  ok: boolean;
}

export interface Task {
  created_by: string;
  created_at: number;
  id: string;
  description: string;
  time: string;
  name: string;
  comments: Comment[];
}

export interface Tasks {
  tasks: Task[];
}
