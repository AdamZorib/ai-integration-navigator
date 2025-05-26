
import React from 'react';

export interface SectionConfig {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  interactiveComponent?: React.ReactNode;
}

// Props for Icon components
export interface IconProps {
  className?: string;
}
