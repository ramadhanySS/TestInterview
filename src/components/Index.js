import React, { useEffect } from "react";

function Index() {
  useEffect(() => {
    let getData = async () => {
      try {
        let rawData = await fetch(
          `https://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth`,
        );
        let data = await rawData.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div>hello</div>
    </>
  );
}

export default Index;
