"use client";

import { notFound, useSearchParams } from "next/navigation";
import { z } from "zod";
import Link from "next/link";

import {
  ArrowRightLeft,
  Email,
  Eye,
  EyeOff,
  Gmail,
  Logo,
} from "@/components/icons";
import {
  Button,
  ButtonGroup,
  HelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Label,
  buttonVariants,
} from "@/components/ui";
import { useToggle } from "@/lib/hooks";

const schema = z.enum([
  "API-KEY",
  "OAUTH-V2",
  "SESSION-AUTH",
  "BASIC-AUTH",
  "DIGEST-AUTH",
]);

function Auth() {
  const searchParams = useSearchParams();
  const [show, { toggle }] = useToggle();

  const type = searchParams.get("type");
  const { success } = schema.safeParse(type);

  if (!success) {
    notFound();
  }

  return (
    <>
      {type === "API-KEY" && (
        <div className="mx-auto max-w-[404px] px-4 pt-[46px]">
          <div className="flex items-center justify-center gap-x-3">
            <Gmail className="flex-none" />
            <ArrowRightLeft className="h-5 w-5 flex-none text-gray-300" />
            <Logo className="h-8 w-8 flex-none text-primary-500" />
          </div>

          <div className="mt-6">
            <h1 className="text-center text-lg font-semibold text-gray-800">
              Log in and Authorize
            </h1>
            <p className="mt-2 text-center text-sm leading-[16.94px] text-gray-500">
              Log in to authorize your Gmail account to{" "}
              <span className="font-bold">Blend Metrics</span>
            </p>

            <form className="mt-6">
              <div className="space-y-1.5">
                <Label className="text-gray-700" id="email" size="sm">
                  Email
                </Label>
                <InputGroup>
                  <InputLeftElement>
                    <Email className="text-gray-500" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    id="email"
                    placeholder="olivia@untitledui.com"
                  />
                </InputGroup>
              </div>

              <div className="mt-5 space-y-1.5">
                <Label className="text-gray-700" id="api-key" size="sm">
                  API Key
                </Label>
                <HelperText size="sm">
                  Enter API key, located at{" "}
                  <Link className="text-primary-500 underline" href="/">
                    blendmetrics.com/account
                  </Link>
                </HelperText>
                <Input
                  placeholder="e.g. bY2t8YgKQygnxWpQViwdBss4"
                  type="text"
                  id="api-key"
                />
              </div>

              <ButtonGroup direction="horizontal" className="mt-5">
                <Link
                  className={buttonVariants({
                    variant: "outlined",
                    visual: "gray",
                  })}
                  href="/integration/metrics/connect?tab=second&layout=next"
                >
                  Cancel
                </Link>
                <Button>Log In</Button>
              </ButtonGroup>
            </form>
          </div>
        </div>
      )}

      {(type === "BASIC-AUTH" ||
        type === "SESSION-AUTH" ||
        type === "DIGEST-AUTH") && (
        <div className="mx-auto max-w-[404px] px-4 pt-[46px]">
          <div className="flex items-center justify-center gap-x-3">
            <Gmail className="flex-none" />
            <ArrowRightLeft className="h-5 w-5 flex-none text-gray-300" />
            <Logo className="h-8 w-8 flex-none text-primary-500" />
          </div>

          <div className="mt-6">
            <h1 className="text-center text-lg font-semibold text-gray-800">
              Log in and Authorize
            </h1>
            <p className="mt-2 text-center text-sm leading-[16.94px] text-gray-500">
              Log in to authorize your Gmail account to{" "}
              <span className="font-bold">Blend Metrics</span>
            </p>

            <form className="mt-6">
              <div className="space-y-1.5">
                <Label className="text-gray-700" id="email" size="sm">
                  Username
                </Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter your username"
                />
              </div>

              <div className="mt-5 space-y-1.5">
                <Label className="text-gray-700" id="password" size="sm">
                  Password
                </Label>
                <InputGroup>
                  <Input
                    placeholder="Enter your password"
                    type={show ? "text" : "password"}
                    id="password"
                  />
                  <InputRightElement>
                    <button
                      className="focus-visible:outline-none"
                      onClick={toggle}
                      type="button"
                    >
                      {show ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </InputRightElement>
                </InputGroup>
              </div>

              <ButtonGroup direction="horizontal" className="mt-5">
                <Link
                  className={buttonVariants({
                    variant: "outlined",
                    visual: "gray",
                  })}
                  href="/integration/metrics/connect?tab=second&layout=next"
                >
                  Cancel
                </Link>
                <Button>Log In</Button>
              </ButtonGroup>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Auth;
