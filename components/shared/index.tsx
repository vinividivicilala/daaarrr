import React from "react";
import { styled, keyframes } from "styles";
import { motion } from "framer-motion";
import { ArrowRight } from "components/icons";
import NextLink from "next/link";

export const Stack = styled(motion.div, {
  display: "grid",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",

  variants: {
    type: {
      column: {
        gridAutoFlow: "row",
      },
      row: {
        gridAutoFlow: "column",
      },
    },
    gap: {
      1: {
        gridGap: "$1",
      },
      2: {
        gridGap: "$2",
      },
      3: {
        gridGap: "$3",
      },
      4: {
        gridGap: "$4",
      },
      5: {
        gridGap: "$5",
      },
      6: {
        gridGap: "$6",
      },
      7: {
        gridGap: "$7",
      },
      8: {
        gridGap: "$8",
      },
      9: {
        gridGap: "$9",
      },
    },
  },
});

export const IconContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: "2",

  "> svg": {
    width: "100%",
    height: "100%",
    display: "block",
  },
});

const pulse = keyframes({
  "0%": {
    transform: "scale(0.1, 0.1)",
    opacity: 0,
  },
  "50%": {
    opacity: 1,
  },
  "100%": {
    transform: "scale(1.95, 1.95)",
    opacity: "0",
  },
});

export const Pulse = styled("div", {
  border: "2px solid #50d565",
  position: "absolute",
  br: "100%",
  size: "100%",
  top: "0%",
  right: "0%",
  transform: "translate(-100%, -100%)",
  opacity: "0",
  animation: `${pulse} 1.5s ease-in-out infinite`,
  zIndex: "-1",
});

export function Link({
  href,
  bold = false,
  children,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  bold?: boolean;
}) {
  return (
    <NextLink href={href} {...props}>
      <LinkText bold={bold}>{children}</LinkText>
    </NextLink>
  );
}

const LinkText = styled("span", {
  color: "$indigo11",
  cursor: "pointer",
  transition: "color 300ms ease",
  "&:hover": { color: "$indigo12" },

  variants: {
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
  },
});

export const ActionLink = ({ children }: any) => {
  return (
    <Stack
      type="row"
      gap={1}
      css={{
        color: "$slate12",
        background: "$slate2",
        padding: "0.5rem 1rem",
        br: "4px",
        cursor: "pointer",
      }}
    >
      <LinkText>{children}</LinkText>
      <IconContainer css={{ size: "24px" }}>
        <ArrowRight />
      </IconContainer>
    </Stack>
  );
};

export const ActionLinkGhost = styled(ActionLink, {
  color: "$slate12",
  border: "1px solid $slate12",
  background: "none",
});

export const glisten = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "60%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(100%)" },
});

export const AlbumArt = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  size: "45px",
  br: "5px",
  overflow: "hidden",
  position: "relative",

  img: {
    size: "100%",
    objectFit: "cover",
  },

  variants: {
    skeleton: {
      true: {
        bg: "$slate7",

        "&::after": {
          position: "absolute",
          content: "",
          inset: 0,
          linearGradient:
            "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
          transform: "translateX(-100%)",
          animation: `${glisten} 1.6s linear 0.5s infinite`,
        },
      },
    },
  },
});

export const TextSkeleton = styled("span", {
  width: "7rem",
  height: "0.9rem",
  br: "5px",
  background: "$slate8",
  overflow: "hidden",
  position: "relative",

  "&::after": {
    position: "absolute",
    content: "",
    inset: 0,
    linearGradient: "90deg, transparent, rgba(0, 0, 0, 0.09), transparent",
    transform: "translateX(-100%)",
    animation: `${glisten} 1.6s linear 0.5s infinite`,
  },

  variants: {
    size: {
      0: {
        width: "0rem",
      },
      1: {
        width: "1rem",
      },
      2: {
        width: "2rem",
      },
      3: {
        width: "3rem",
      },
      4: {
        width: "4rem",
      },
      5: {
        width: "5rem",
      },
      6: {
        width: "6rem",
      },
      7: {
        width: "7rem",
      },
      8: {
        width: "8rem",
      },
      9: {
        width: "9rem",
      },
    },
  },

  defaultVariant: {
    size: 7,
  },
});

export const Divider = styled("div", {
  width: "100%",
  height: "3px",
  bg: "$slate6",
  br: "9999px",
});
