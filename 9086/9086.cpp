#include <iostream>
#include <string>

using namespace std;
int main()
{
    ios::sync_with_stdio(false);
	cin.tie(NULL);
    string S;

    int T;

    cin >> T;

    for(int a=0;a<T;a++)
    {
        cin >> S;
        
        cout << S[0] << S[S.length() - 1] << "\n";
    }
    return 0;
}