import { Env } from "@/lib/validations/env";


declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}