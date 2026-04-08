import type { Denops } from "https://deno.land/x/denops_std/mod.ts";
import { marked } from "https://deno.land/x/marked/mod.ts";

export async function main(denops: Denops): Promise<void> {
    denops.dispatcher = {
        async read() {
            const content = (await denops.call(
                "getbufline",
                await denops.call("bufnr"),
                1,
                "$"
            )) as string[];
            const html: string = marked(content.join("\n"), {
                headerIds: false,
                mangle: false,
            });
            await denops.call("setreg", "+", html);
        },
    };
    await denops.cmd(
        `command! -nargs=? DenopsMarkdown2Html call denops#notify('${denops.name}', 'read',[])`
    );
}
