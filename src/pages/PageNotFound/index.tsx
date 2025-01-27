import ErrorComponent from "../../components/ErrorComponent";

const PageNotFound = () => {
  return (
    <main className="flex min-h-[80vh] w-full items-center justify-center pl-[15px] pr-[15px]">
      <ErrorComponent error="PAGE NOT FOUND!" errorCode="404" />
    </main>
  );
};

export default PageNotFound;
