import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  type: 'agent' | 'workflow' | 'data';
}

export interface UseCaseProps {
  title: string;
  description: string;
  icon: ReactNode;
  category: string;
}

export interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}