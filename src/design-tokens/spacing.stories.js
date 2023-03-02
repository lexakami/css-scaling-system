export default {
    title: 'Design Tokens/Spacing scale',
    parameters: {
        viewMode: 'docs',
        chromatic: { disable: true },
    },
};

export const spacingScale = () => ({
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
                            <div class="sb_spacing-example" style="width: var(--spacing-neg6); height: var(--spacing-neg6);"></div>
                            <p>0.79rem</p>
                            <p>7.89px</p>
                        </td>
                        <td>
                            <code>var(--spacing-neg6)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-neg5); height: var(--spacing-neg5);"></div>
                            <p>0.88rem</p>
                            <p>8.88px</p>
                        </td>
                        <td>
                            <code>var(--spacing-neg5)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-neg4); height: var(--spacing-neg4);"></div>
                            <p>0.99rem</p>
                            <p>9.98px</p>
                        </td>
                        <td>
                            <code>var(--spacing-neg4)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-neg3); height: var(--spacing-neg3);"></div>
                            <p>1.12rem</p>
                            <p>11.23px</p>
                        </td>
                        <td>
                            <code>var(--spacing-neg3)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-neg2); height: var(--spacing-neg2);"></div>
                            <p>1.27rem</p>
                            <p>12.65px</p>
                        </td>
                        <td>
                            <code>var(--spacing-neg2)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-neg1); height: var(--spacing-neg1);"></div>
                            <p>1.42rem</p>
                            <p>14.22px</p>
                        </td>
                        <td>
                            <code>var(--spacing-neg1)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-0); height: var(--spacing-0);"></div>
                            <p>1.6rem</p>
                            <p>16px</p>
                        </td>
                        <td>
                            <code>var(--spacing-0)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-1); height: var(--spacing-1);"></div>
                            <p>1.8rem</p>
                            <p>18px</p>
                        </td>
                        <td>
                            <code>var(--spacing-1)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-2); height: var(--spacing-2);"></div>
                            <p>2.03rem</p>
                            <p>20.25px</p>
                        </td>
                        <td>
                            <code>var(--spacing-2)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-3); height: var(--spacing-3);"></div>
                            <p>2.28rem</p>
                            <p>22.78px</p>
                        </td>
                        <td>
                            <code>var(--spacing-3)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-4); height: var(--spacing-4);"></div>
                            <p>2.56rem</p>
                            <p>25.63px</p>
                        </td>
                        <td>
                            <code>var(--spacing-4)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-5); height: var(--spacing-5);"></div>
                            <p>2.88rem</p>
                            <p>28.83px</p>
                        </td>
                        <td>
                            <code>var(--spacing-5)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-6); height: var(--spacing-6);"></div>
                            <p>3.24rem</p>
                            <p>32.43px</p>
                        </td>
                        <td>
                            <code>var(--spacing-6)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-7); height: var(--spacing-7);"></div>
                            <p>3.65rem</p>
                            <p>36.48px</p>
                        </td>
                        <td>
                            <code>var(--spacing-7)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-8); height: var(--spacing-8);"></div>
                            <p>4.11rem</p>
                            <p>41.05px</p>
                        </td>
                        <td>
                            <code>var(--spacing-8)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-9); height: var(--spacing-9);"></div>
                            <p>4.62rem</p>
                            <p>46.18px</p>
                        </td>
                        <td>
                            <code>var(--spacing-9)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-10); height: var(--spacing-10);"></div>
                            <p>5.2rem</p>
                            <p>51.95px</p>
                        </td>
                        <td>
                            <code>var(--spacing-10)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-11); height: var(--spacing-11);"></div>
                            <p>5.85rem</p>
                            <p>58.45px</p>
                        </td>
                        <td>
                            <code>var(--spacing-11)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-12); height: var(--spacing-12);"></div>
                            <p>6.58rem</p>
                            <p>65.75px</p>
                        </td>
                        <td>
                            <code>var(--spacing-12)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-13); height: var(--spacing-13);"></div>
                            <p>7.4rem</p>
                            <p>73.98px</p>
                        </td>
                        <td>
                            <code>var(--spacing-13)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-14); height: var(--spacing-14);"></div>
                            <p>8.32rem</p>
                            <p>83.23px</p>
                        </td>
                        <td>
                            <code>var(--spacing-14)</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="sb_spacing-example" style="width: var(--spacing-15); height: var(--spacing-15);"></div>
                            <p>9.36rem</p>
                            <p>93.63px</p>
                        </td>
                        <td>
                            <code>var(--spacing-15)</code>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
});
