#include <iostream>
#include <string>

using namespace std;
int main()
{
    ios::sync_with_stdio(false);
	cin.tie(NULL);
    string A;

    while(1)
    {
        getline(cin, A);
        if(A == "")
        {
            break;
        }
        cout << A << '\n';

        continue;
    }

    return 0;
}