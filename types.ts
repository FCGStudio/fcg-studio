
export interface VideoProject {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
