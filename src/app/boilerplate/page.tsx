import { commonApi } from "@/apis";

const Index = async () => {
  const { test } = await commonApi.getApiTest();

  return (
    <>
      boilerplate
      {test}
    </>
  );
};

export default Index;
