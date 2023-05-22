#include <iostream>
#include <string.h>

using namespace std;
int main()
{
    ios::sync_with_stdio(false);
	cin.tie(NULL);

    char S[21];
    int T, R;

    cin >> T;

    for(int a=0;a<T;a++)
    {
        cin >> R >> S;
        for(int b=0;b<strlen(S);b++)
        {
            for(int c=0;c<R;c++)
            {
                cout << S[b];
            }
        }
        cout << "\n";
    }

    return 0;
}