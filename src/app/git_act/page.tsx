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
    </div>
  );
};

export default GithubActivitiesPage;
