import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSelector } from "react-redux";

const RoomPage = () => {
  const { user } = useSelector((state) => state.user);
  // const { roomId } = user?._id;
  const {roomId} = useParams();

  const myMeeting = async (element) => {
    const appID = 1119991377;
    const serverSecret = "0e77d84ed31fdbb225cf51dabae2563c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      user?.fullName
    );
    // use userID insted of Date.now(),"Pratik"
    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:3000/room/${roomId}`,
          // url: `https://final-year-project-indol.vercel.app/room/${roomId}`
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
