import styled from "@emotion/styled";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const mediaIcons = [
  InstagramIcon,
  WhatsAppIcon,
  MailOutlineIcon,
  PhoneInTalkIcon,
];

const SocialMedia = () => {
  return (
    <MediaStyle>
      {mediaIcons.map((Icon, i, arr) => (
        <div
          key={i + 100}
          style={{
            paddingRight: 8,
            paddingLeft: 8,
            borderRight: i + 1 !== arr.length && "2px solid #f2f2f2",
          }}
        >
          <Icon
            sx={{
              color: "#f2f2f2",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </div>
      ))}
    </MediaStyle>
  );
};

const MediaStyle = styled("div")(({ theme }) => ({
  marginTop: 25,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

export default SocialMedia;
