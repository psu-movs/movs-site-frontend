"use client";

import { Stack } from "@mui/material";

const AboutInformation = ({data}) => {
  console.log(data)
  
  return (
    <Stack>
      {/*
        data.map((item) => {
          switch (item.type) {
            case 1:
              return (
                <Text key={item.id} {...item.content} />
              )
            case 2:
              return (
                <TextAndPicture key={item.id} {...item.content} />
              )
            case 3:
              return (
                <MiddlePicture key={item.id} {...item.content} />
              )
          }
      })
      */}
    </Stack>
  );
}

export default AboutInformation;