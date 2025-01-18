import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

function ContactPage() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center text-3xl font-bold mb-3">Contact Us</h1>
      <div className="max-w-5xl h-[1px] w-full bg-gray-700 mx-auto mb-5"></div>
      <form className="space-y-6 mx-auto w-full max-w-lg">
        <div className="grid w-full max-w-lg items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message-2"
            name="message"
          />
          <p className="text-sm text-muted-foreground">
            Your message will be copied to the support team.
          </p>
        </div>
        <Button className={cn("px-8 bg-lime-600")} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactPage;
