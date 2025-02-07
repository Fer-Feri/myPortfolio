import { motion } from "framer-motion";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import nextJsIcon from "../assets/icons/nextjs.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import sassIcon from "../assets/icons/sass.png";

export default function CustomizedTimeline() {
  const items = [
    { icon: jsIcon, title: "JS" },
    { icon: reactIcon, title: "ReactJS" },
    { icon: nextJsIcon, title: "NextJS" },
    { icon: tailwindIcon, title: "Tailwind" },
    { icon: sassIcon, title: "Sass" },
  ];

  return (
    <Timeline position="alternate">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          />
          <TimelineSeparator>
            {/* اگر اولین آیتم بود، خط بالا رو حذف کن */}
            <TimelineDot
              sx={{
                width: 140,
                height: 140,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={item.icon}
                alt={`${item.title} Icon`}
                style={{ width: "130px", height: "130px" }}
              />
            </TimelineDot>
            {index !== items.length - 1 && <TimelineConnector />}{" "}
            {/* اگر آخرین آیتم بود، خط پایین رو حذف کن */}
          </TimelineSeparator>

          <TimelineContent sx={{ py: "10rem", px: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Typography
                variant="h6"
                component="span"
                className="text-neutral-900 dark:text-gray-200"
                sx={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}
              >
                {item.title}
              </Typography>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
