import classes from './BaseOverlay.module.css';

export function BaseOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.baseOverlay}>
      {children}
    </div>
  );
}
