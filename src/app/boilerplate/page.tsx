import { useMemo, Fragment } from "react";
import { commonApi } from "@/apis";
import { Warn } from "./components/Warn";
import { AlertChip } from "./components/AlertChip";
const Index = async () => {
  const { test } = await commonApi.getApiTest();
  let flag = false;
  for (const arr of test) {
    if (arr.includes(1)) flag = true;
  }

  return (
    <>
      {flag && <AlertChip warn={flag} />}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
        }}>
        {test.map((arr, i) => (
          <Fragment key={i}>
            {arr.map((value, idx) => (
              // Return the Warn component
              <Warn key={i * arr.length + idx} value={value} />
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Index;
