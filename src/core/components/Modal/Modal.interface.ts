export interface IModal {
  open: boolean;
  children: React.ReactNode;
  needUnderground?: boolean;
  onClose: () => void;
}
