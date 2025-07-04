import { Button } from "@radix-ui/themes";

export function Welcome({ message }: { message: string }) {
  return (
    <main>
      <div>
        <header>header</header>
        <div>
          <nav>
            <p>What&apos;s next?</p>
            <ul>
              resources
              <li>{message}</li>
            </ul>
          </nav>
          <Button
            size="4"
            radius="full"
            variant="solid"
            onClick={() => {
              console.log("clicked");
            }}
          >
            Click hello
          </Button>
        </div>
      </div>
    </main>
  );
}
