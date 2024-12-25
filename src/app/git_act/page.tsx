import { Badge } from "@/components/ui/badge";
import Heading from "@/components/Heading";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Github } from "lucide-react";
const GithubActivitiesPage = () => {
  return (
    // GitHub activities Page
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Github className="h-5 w-5" />
        GitHub activities
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Github activities</Heading>
      </div>
      <FramerWrapper y={100} delay={0.4}>
        <div className="grid gap-4 grid-cols-2 grid-rows-3">
          {/* Github stats */}
          <a href="https://github.com/MinhCreator">
            <img
              alt="github stats"
              height="130px"
              src="https://github-readme-stats.vercel.app/api?username=MinhCreator&count_private=true&show_icons=true&custom_title=GitHub%20Stats&hide_border=false&theme=defaults"
            />
          </a>
          {/* Github streak */}
          <a href="https://git.io/streak-stats">
            <img
              className="right-10 bottom-10 flex"
              src="https://github-readme-streak-stats.herokuapp.com?user=MinhCreator&theme=defaults&hide_border=false&border_radius=10.5&card_width=465&card_height=180&fire=EB5454"
              alt="GitHub Streak"
            />
          </a>

          {/* profile summary */}
          <img
            src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=MinhCreator&theme=blueberry"
            alt="github-profile"
          />

          {/* activity graph */}
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=MinhCreator&theme=react&custom_title=Contribution%20Graph%20in%20the%20last%2031%20days&hide_border=false"
            alt="activity-graph"
          />

          {/* dashboard stats */}
          <a
            href="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats?user_id=92376650"
            target="_blank"
          >
            <source
              media="(prefers-color-scheme: dark)"
              src="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=92376650&image_size=auto&color_scheme=dark"
              width="771"
              height="auto"
            ></source>
            <img
              alt="Dashboard stats of @MinhCreator"
              src="https://next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=92376650&image_size=auto&color_scheme=light"
              width="850"
              height="auto"
            />
          </a>
          
          {/* contribution time */}
          <a
            href="https://next.ossinsight.io/widgets/official/analyze-user-contribution-time-distribution?user_id=92376650&period=all_times"
            target="_blank"
          >
            <source
              media="(prefers-color-scheme: dark)"
              src="https://next.ossinsight.io/widgets/official/analyze-user-contribution-time-distribution/thumbnail.png?user_id=92376650&period=all_times&image_size=auto&color_scheme=dark"
              width="721"
              height="auto"
            />
            <img
              alt="Contribution Time Distribution of @MinhCreator"
              src="https://next.ossinsight.io/widgets/official/analyze-user-contribution-time-distribution/thumbnail.png?user_id=92376650&period=all_times&image_size=auto&color_scheme=light"
              width="721"
              height="auto"
            />
          </a>
        </div>
      </FramerWrapper>
    </div>
  );
};

export default GithubActivitiesPage;
