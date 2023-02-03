import axios from "axios";
import { models } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";
import { useEffect, useState } from "react";

const PowerBiReport = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    axios
      .post(
        "https://api.powerbi.com/v1.0/myorg/groups/0b2050ca-4628-4ccb-a91e-6a6c78a54a8c/reports/4e53daaf-a37d-4877-b162-cbddd12e6c9d/GenerateToken",
        {
          accessLevel: "View",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmRhMzdkNTktMmNiMC00Y2NjLWE3NWMtMjU1OGMwZWYzNWJiLyIsImlhdCI6MTY3Mjg2MTAyMywibmJmIjoxNjcyODYxMDIzLCJleHAiOjE2NzI4NjY2NzMsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFRaEVzMHFSWHJ5emxvOXAyazAwQVhrRnhjOVJEWlZxQitjTTNndExSOUROQUNGOUpZbmxHV1AwdHEydjF1Q2FFIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTWFya2V0TG9naWMiLCJnaXZlbl9uYW1lIjoiUG93ZXIgQkkiLCJpcGFkZHIiOiIxODEuMjA0LjIyNy4xMzgiLCJuYW1lIjoiTWFya2V0TG9naWMiLCJvaWQiOiI2MmUyNTM1MS04MzIwLTQ2NWItYTRmYi02ZDc1NGZhNGY0Y2IiLCJwdWlkIjoiMTAwMzIwMDE2ODk1Mjc1MSIsInJoIjoiMC5BU2tBV1gyal9iQXN6RXluWENWWXdPODF1d2tBQUFBQUFBQUF3QUFBQUFBQUFBQXBBRzQuIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6InRZWkhLUGNRNXNzemV3ZE5kYUhlc2V2QUxjalBzMGNSaU56dzI3aFFob2MiLCJ0aWQiOiJmZGEzN2Q1OS0yY2IwLTRjY2MtYTc1Yy0yNTU4YzBlZjM1YmIiLCJ1bmlxdWVfbmFtZSI6InBvd2VyYmlAbWFya2V0bG9naWMub25taWNyb3NvZnQuY29tIiwidXBuIjoicG93ZXJiaUBtYXJrZXRsb2dpYy5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJLbnhxV0paT0RFLXlFQW1pTzg1TkFnIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.qEqkuS7aAiHs0ae8x3YQkjfZNG-fCYKS0t9Vo_HONo_l3DhG_vKDBRmZHDqxwfxQXvHDAKsWU3giA7m1hxrJwvDoy8gnaotC8K0QAxfTnMJeBJ7CI_iUgE-S3w2OjmrE3A9rTv4yUWChNRvMbeoekGm597CZmBizEBXattxOXezDLrEztegnI9ijbuAWNGTKEPoxPkgcCrWdX4gGuOl5w63BcX6-kl5IMQtYRg8nTDEbz3aX2wwQ3MXlLroGfbQfkEWIFB8ZTTk8WdfgewnTOJm5AxB_9-spCxkJWCAdGfaPdzXVpjcQ-6T2t8jZ7ahleSaI9LR5FeaeijUBtD-QXw",
          },
        }
      )
      .then((res) => setToken(res.data.token));
  }, []);

  return (
    <div>
      {/* <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "4e53daaf-a37d-4877-b162-cbddd12e6c9d",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=4e53daaf-a37d-4877-b162-cbddd12e6c9d&groupId=0b2050ca-4628-4ccb-a91e-6a6c78a54a8c&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLUVBU1QtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
          accessToken: token,

          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"report-style-class"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      /> */}
      <iframe
        title="BCR"
        width="100%"
        height="800"
        src="https://app.powerbi.com/view?r=eyJrIjoiZjA5MGM5MzEtODRmMy00ZjI4LTlmZTktZGJiOGIwMTE1NDRjIiwidCI6ImZkYTM3ZDU5LTJjYjAtNGNjYy1hNzVjLTI1NThjMGVmMzViYiIsImMiOjJ9&pageName=ReportSectiondfa7b4c9d25a5e8c7c9b"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default PowerBiReport;
