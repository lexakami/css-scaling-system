export default {
    title: 'Design Tokens/Font scale',
    parameters: {
        viewMode: 'docs',
        chromatic: { disable: true },
    },
};

export const fontScale = () => ({
    template: `
        <div>
            <table class="sb_table">
                <thead>
                    <tr>
                        <th scope="col" width="25%">Example</th>
                        <th scope="col" width="25%">Token</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-neg3)">Aa</p>
                            <p>1.12rem</p>
                            <p>11.23px</p>
                        </td>
                        <td>
                            <code>var(--font-neg3)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-neg2)">Aa</p>
                            <p>1.26rem</p>
                            <p>12.65px</p>
                        </td>
                        <td>
                            <code>var(--font-neg2)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-neg1)">Aa</p>
                            <p>1.42rem</p>
                            <p>14.22px</p>
                        </td>
                        <td>
                            <code>var(--font-neg1)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-0)">Aa</p>
                            <p>1.6rem</p>
                            <p>16px</p>
                        </td>
                        <td>
                            <code>var(--font-0)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-1)">Aa</p>
                            <p>1.8rem</p>
                            <p>18px</p>
                        </td>
                        <td>
                            <code>var(--font-1)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-2)">Aa</p>
                            <p>2.02rem</p>
                            <p>20.25px</p>
                        </td>
                        <td>
                            <code>var(--font-2)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-3)">Aa</p>
                            <p>2.28rem</p>
                            <p>22.78px</p>
                        </td>
                        <td>
                            <code>var(--font-3)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-4)">Aa</p>
                            <p>2.56rem</p>
                            <p>25.63px</p>
                        </td>
                        <td>
                            <code>var(--font-4)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-5)">Aa</p>
                            <p>2.88rem</p>
                            <p>28.83px</p>
                        </td>
                        <td>
                            <code>var(--font-5)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-6)">Aa</p>
                            <p>3.24rem</p>
                            <p>32.43px</p>
                        </td>
                        <td>
                            <code>var(--font-6)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-7)">Aa</p>
                            <p>3.65rem</p>
                            <p>36.48px</p>
                        </td>
                        <td>
                            <code>var(--font-7)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-8)">Aa</p>
                            <p>4.1rem</p>
                            <p>41.05px</p>
                        </td>
                        <td>
                            <code>var(--font-8)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-9)">Aa</p>
                            <p>4.62rem</p>
                            <p>46.18px</p>
                        </td>
                        <td>
                            <code>var(--font-9)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-10)">Aa</p>
                            <p>5.2rem</p>
                            <p>51.95px</p>
                        </td>
                        <td>
                            <code>var(--font-10)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-11)">Aa</p>
                            <p>5.8rem</p>
                            <p>58.45px</p>
                        </td>
                        <td>
                            <code>var(--font-11)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-12)">Aa</p>
                            <p>6.5rem</p>
                            <p>65.76px</p>
                        </td>
                        <td>
                            <code>var(--font-12)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="sb_font-example" style="font-size: var(--font-13)">Aa</p>
                            <p>7.4rem</p>
                            <p>73.98px</p>
                        </td>
                        <td>
                            <code>var(--font-13)</code>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
});
