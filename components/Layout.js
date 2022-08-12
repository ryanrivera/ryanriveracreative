import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div className="text-slate-800">
      <main>{children}</main>
      <Footer />
    </div>
  );
};
