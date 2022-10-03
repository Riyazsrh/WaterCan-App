import { FC } from "react";

import usePagination from "@mui/material/usePagination/usePagination";

import { UsePaginationProps } from "@mui/material/usePagination/usePagination";
import { Styles } from "../../pages/customers/shopNearbyCart/shopcart.styles";
import { Stack, Button, Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Paginate: FC<UsePaginationProps> = (props) => {
  const { items } = usePagination(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      direction="row"
      sx={{
        position: "relative",
      }}
    >
      {items.map(({ page, type, selected, ...item }, index: any) => {
        let children: any = null;

        if (type === "start-ellipsis" || type === "end-ellipsis") {
          children = "...";
        } else if (type === "page") {
          children = (
            <Button
              variant="outlined"
              color="primary"
              sx={{
                fontWeight: `${selected ? "bold" : undefined}`,
                border: "none",
                borderRadius: "0px",
              }}
              {...item}
            >
              {page}
            </Button>
          );
        } else {
          {
            matches
              ? (children = (
                  <Button
                    variant="text"
                    {...item}
                    sx={{
                      position: "absolute",
                      bottom: "35px",
                      left: "0px",
                      zindex: 1111,
                      ml: `${
                        type === "next"
                          ? "270px"
                          : null || type === "previous"
                          ? "50px"
                          : null
                      }`,
                    }}
                  >
                    {type}
                  </Button>
                ))
              : (children = (
                  <Button variant="text" {...item}>
                    {type}
                  </Button>
                ));
          }
        }

        return <Box key={index}>{children}</Box>;
      })}
    </Stack>
  );
};

export default Paginate;
